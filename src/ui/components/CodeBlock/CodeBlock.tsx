import { Highlight, themes } from 'prism-react-renderer';
import styles from './CodeBlock.module.css';

interface Props {
  code: string;
  language?: string;
  label?: string;
  variant?: 'good' | 'bad' | 'neutral';
}

export const CodeBlock: React.FC<Props> = ({
  code,
  language = 'tsx',
  label,
  variant = 'neutral',
}) => (
  <div className={`${styles.wrapper} ${styles[variant]}`}>
    {label && (
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        <span className={styles.lang}>{language}</span>
      </div>
    )}
    <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre className={styles.pre}>
          <code>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span className={styles.lineNumber}>{i + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  </div>
);
