import { AnimatedSection } from '../../components/AnimatedSection/AnimatedSection';
import { LevelBanner } from '../../components/LevelBanner/LevelBanner';
import { CodeDiff } from '../../components/CodeDiff/CodeDiff';
import { PixelText } from '../../components/PixelText/PixelText';
import styles from './CompetenceTrapSection.module.css';

const BAD_CODE = `function LoginForm() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div>
      <div>Login</div>
      <input
        onChange={(e) => setUser(e.target.value)}
        placeholder="Username"
      />
      <input
        onChange={(e) => setPass(e.target.value)}
        placeholder="Password"
      />
      <div onClick={() => fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ user, pass })
      })}>
        Submit
      </div>
    </div>
  );
}`;

const GOOD_CODE = `function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await loginService.login(
        sanitize(formData.username),
        formData.password,
      );
      if (!res.ok) setError("Credenciales inválidas");
    } catch {
      setError("Error de conexión");
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Login">
      <h2>Iniciar sesión</h2>
      {error && <p role="alert">{error}</p>}
      <label htmlFor="username">Usuario</label>
      <input
        id="username"
        value={formData.username}
        onChange={handleChange("username")}
        required
        autoComplete="username"
      />
      <label htmlFor="password">Contraseña</label>
      <input
        id="password"
        type="password"
        value={formData.password}
        onChange={handleChange("password")}
        required
        autoComplete="current-password"
      />
      <button type="submit">Entrar</button>
    </form>
  );
}`;

export const CompetenceTrapSection: React.FC = () => (
  <AnimatedSection id="competence-trap">
    <LevelBanner
      level={3}
      title="TRAP!"
      subtitle="La trampa de la competencia aparente"
      color="var(--color-neon-yellow)"
    />

    <blockquote className={styles.quote}>
      "Saber usar una calculadora no te convierte en matemático.<br />
      Saber usar Copilot no te convierte en developer."
    </blockquote>

    <div className={styles.codeSection}>
      <PixelText as="h3" size="sm" color="var(--color-neon-cyan)">
        Prompt: "Hazme un formulario de login en React"
      </PixelText>
      <CodeDiff badCode={BAD_CODE} goodCode={GOOD_CODE} />
    </div>

    <div className={styles.problems}>
      <PixelText as="h3" size="sm" color="var(--color-neon-yellow)">
        ¿QUÉ FALLA EN EL CÓDIGO DE LA IA?
      </PixelText>
      <ul className={styles.list}>
        <li><span className={styles.x}>✗</span> Sin tests</li>
        <li><span className={styles.x}>✗</span> Sin sanitización (XSS)</li>
        <li><span className={styles.x}>✗</span> Sin accesibilidad (div en vez de form/button)</li>
        <li><span className={styles.x}>✗</span> Sin manejo de errores</li>
        <li><span className={styles.x}>✗</span> Sin labels para inputs</li>
        <li><span className={styles.x}>✗</span> Sin tipado TypeScript</li>
      </ul>
    </div>

    <div className={styles.dunning}>
      <PixelText as="span" size="sm" color="var(--color-neon-magenta)" glow>
        DUNNING-KRUGER AMPLIFICADO
      </PixelText>
      <p className={styles.text}>
        La IA te sube a la cima de "Mount Stupid" más rápido que nunca. Crees que ya eres pro porque pasaste el tutorial con el power-up.
      </p>
    </div>
  </AnimatedSection>
);
