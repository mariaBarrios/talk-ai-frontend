import { CodeBlock } from '../CodeBlock/CodeBlock';
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
}) => (
  <div className={styles.diff}>
    <div className={styles.side}>
      <CodeBlock code={badCode} language={language} label={badLabel} variant="bad" />
    </div>
    <div className={styles.side}>
      <CodeBlock code={goodCode} language={language} label={goodLabel} variant="good" />
    </div>
  </div>
);
