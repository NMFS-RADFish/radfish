import React, {useCallback, useState, useRef, useEffect} from 'react';
import clsx from 'clsx';
import copy from 'copy-text-to-clipboard';
import {translate} from '@docusaurus/Translate';
import {useCodeBlockContext} from '@docusaurus/theme-common/internal';
import Button from '@theme/CodeBlock/Buttons/Button';
import IconCopy from '@theme/Icon/Copy';
import IconSuccess from '@theme/Icon/Success';
import styles from './styles.module.css';
function title() {
  return translate({
    id: 'theme.CodeBlock.copy',
    message: 'Copy',
    description: 'The copy button label on code blocks',
  });
}
function ariaLabel(isCopied) {
  return isCopied
    ? translate({
        id: 'theme.CodeBlock.copied',
        message: 'Copied',
        description: 'The copied button label on code blocks',
      })
    : translate({
        id: 'theme.CodeBlock.copyButtonAriaLabel',
        message: 'Copy code to clipboard',
        description: 'The ARIA label for copy code blocks button',
      });
}
function useCopyButton() {
  const ctx = useCodeBlockContext();
  const code = filterMagicCommentLines(ctx.metadata.codeInput);

  const [isCopied, setIsCopied] = useState(false);
  const copyTimeout = useRef(undefined);
  const copyCode = useCallback(() => {
    copy(code);
    setIsCopied(true);
    copyTimeout.current = window.setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }, [code]);
  useEffect(() => () => window.clearTimeout(copyTimeout.current), []);
  return {copyCode, isCopied};
}
export default function CopyButton({className}) {
  const {copyCode, isCopied} = useCopyButton();
  return (
    <Button
      aria-label={ariaLabel(isCopied)}
      title={title()}
      className={clsx(
        className,
        styles.copyButton,
        isCopied && styles.copyButtonCopied,
      )}
      onClick={copyCode}>
      <span className={styles.copyButtonIcons} aria-hidden="true">
        <IconCopy className={styles.copyButtonIcon} />
        <IconSuccess className={styles.copyButtonSuccessIcon} />
      </span>
    </Button>
  );
}

function filterMagicCommentLines(code) {
  const lines = code.split('\n');
  const filteredLines = [];
  let inRemoveBlock = false;
  
  // More flexible regex patterns that handle various spacing
  const removeStartPattern = /\/\/\s*diff-remove-start/i;
  const removeEndPattern = /\/\/\s*diff-remove-end/i;
  const removeSinglePattern = /\/\/\s*diff-remove(?!-start|-end)/i;
  const anyMagicCommentPattern = /\/\/\s*diff-(add|remove)(?:-start|-end)?/gi;
  
  for (const line of lines) {
    // Check for block start
    if (removeStartPattern.test(line)) {
      inRemoveBlock = true;
      continue;
    }
    
    // Check for block end
    if (removeEndPattern.test(line)) {
      inRemoveBlock = false;
      continue;
    }
    
    // Skip lines in remove block
    if (inRemoveBlock) {
      continue;
    }
    
    // Skip single-line magic comments
    if (removeSinglePattern.test(line)) {
      continue;
    }
    
    // For lines with inline comments, remove the magic comment part
    // This regex handles any amount of whitespace between // and the magic comment
    let cleanedLine = line.replace(/\/\/\s*diff-(add|remove)(?:-start|-end)?(?:\s*$|\s+)/gi, '');
    
    // If the line only contained the magic comment, skip it
    if (cleanedLine.trim() === '') {
      continue;
    }
    
    filteredLines.push(cleanedLine);
  }
  
  return filteredLines.join('\n');
}
