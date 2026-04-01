import { useState } from 'react';
import { CodeBlock } from '../CodeBlock/CodeBlock';
import cbStyles from '../CodeBlock/CodeBlock.module.css';
import styles from './CodeDiff.module.css';

interface Props {
  badCode: string;
  goodCode: string;
  badLabel?: string;
  goodLabel?: string;
  language?: string;
}

export const CodeDiff: React.FC<Props> = ({
  badCode,
  goodCode,
  badLabel = '❌ Código IA sin revisar',
  goodLabel = '✅ Código con criterio',
  language = 'tsx',
}) => {
  const [goodExpanded, setGoodExpanded] = useState(false);

  return (
    <div className={styles.diff}>
      <div className={styles.side}>
        <CodeBlock code={badCode} language={language} label={badLabel} variant="bad" />
      </div>
      <div className={styles.side}>
        {goodExpanded ? (
          <CodeBlock code={goodCode} language={language} label={goodLabel} variant="good" />
        ) : (
          <button
            type="button"
            className={`${cbStyles.wrapper} ${cbStyles.good} ${styles.revealBtn}`}
            onClick={() => setGoodExpanded(true)}
            aria-expanded={false}
            aria-label="Mostrar el código revisado con criterio"
          >
            <div className={cbStyles.header}>
              <span className={cbStyles.label}>{goodLabel}</span>
              <span className={cbStyles.lang}>{language}</span>
            </div>
            <p className={styles.revealHint}>Pulsa para ver la versión revisada.</p>
          </button>
        )}
      </div>
    </div>
  );
};
