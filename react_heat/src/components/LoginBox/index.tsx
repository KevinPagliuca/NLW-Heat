import styles from "./styles.module.scss";
import { VscGithubInverted } from "react-icons/vsc";
import { useAuth } from "../../contexts/AuthContext";

export function LoginBox() {
  const { signInUrl } = useAuth();

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e comaprtilhe sua mensagem</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size={24} />
        Entrar com github
      </a>
    </div>
  );
}
