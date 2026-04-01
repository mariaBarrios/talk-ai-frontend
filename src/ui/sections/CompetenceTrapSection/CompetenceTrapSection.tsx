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
  // Un solo objeto tipado en lugar de user/pass sueltos: más fácil de validar y extender.
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  // El ejemplo de la IA no mostraba fallos de red ni credenciales; aquí el usuario ve el error.
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    // Sin esto, un submit recarga la página; el mal ejemplo ni siquiera usaba <form>.
    e.preventDefault();
    try {
      const res = await loginService.login(
        // Sanitizar antes de enviar reduce riesgo XSS frente a concatenar strings a ciegas.
        sanitize(formData.username),
        formData.password,
      );
      if (!res.ok) setError("Credenciales inválidas");
    } catch {
      setError("Error de conexión");
    }
  };

  return (
    /* <form> + submit: semántica correcta, teclado y lectores; no un <div onClick> que dispara fetch. */
    <form onSubmit={handleSubmit} aria-label="Login">
      <h2>Iniciar sesión</h2>
      {error && (
        /* role="alert": anuncia el error a tecnologías de asistencia (el otro código no avisaba). */
        <p role="alert">{error}</p>
      )}
      {/* Etiquetas reales ligadas con htmlFor; el mal ejemplo solo usaba placeholder (mala a11y). */}
      <label htmlFor="username">Usuario</label>
      <input
        id="username"
        value={formData.username}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, username: e.target.value }))
        }
        required
        autoComplete="username"
      />
      <label htmlFor="password">Contraseña</label>
      {/* type="password" oculta lo que se escribe; el ejemplo sin criterio dejaba el input como texto plano. */}
      <input
        id="password"
        type="password"
        value={formData.password}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, password: e.target.value }))
        }
        required
        autoComplete="current-password"
      />
      {/* <button type="submit"> es enfocable y activable con Enter; un <div> no lo es. */}
      <button type="submit">Entrar</button>
    </form>
  );
}`;

export const CompetenceTrapSection: React.FC = () => (
  <AnimatedSection id="competence-trap">
    <LevelBanner
      level={3}
      title="TRAP!"
      subtitle="La ilusion de dominar demasiado pronto"
      color="var(--color-neon-yellow)"
    />

    <blockquote className={styles.quote}>
      "Usar calculadora ayuda mucho, y entender matematicas te da libertad.<br />
      Con IA pasa igual: la herramienta suma, y tu criterio marca la diferencia."
    </blockquote>

    <div className={styles.codeSection}>
      <PixelText as="h3" size="sm" color="var(--color-neon-cyan)">
        Prompt: "Hazme un formulario de login en React"
      </PixelText>
      <CodeDiff badCode={BAD_CODE} goodCode={GOOD_CODE} />
    </div>

    <div className={styles.problems}>
      <PixelText as="h3" size="sm" color="var(--color-neon-yellow)">
        ¿QUE PODEMOS MEJORAR EN EL CODIGO DE LA IA?
      </PixelText>
      <ul className={styles.list}>
        <li><span className={styles.x}>✗</span> Anadir tests</li>
        <li><span className={styles.x}>✗</span> Anadir sanitizacion (XSS)</li>
        <li><span className={styles.x}>✗</span> Mejorar accesibilidad (usar form/button)</li>
        <li><span className={styles.x}>✗</span> Incluir manejo de errores</li>
        <li><span className={styles.x}>✗</span> Incluir labels en inputs</li>
        <li><span className={styles.x}>✗</span> Anadir tipado TypeScript</li>
      </ul>
    </div>

    <div className={styles.dunning}>
      <PixelText as="span" size="sm" color="var(--color-neon-magenta)" glow>
        APRENDER TAMBIEN ES PRACTICAR
      </PixelText>
      <p className={styles.text}>
        La IA acelera el inicio. El siguiente paso es transformar ese impulso en criterio, practica y confianza real.
      </p>
    </div>
  </AnimatedSection>
);
