import { styles } from "@/styles/cvStyles";

interface Props {
  icon: React.ReactNode;
  text: string;
}

export default function ContactRow({ icon, text }: Props) {
  return (
    <div style={styles.contactRow}>
      <span style={styles.iconBox}>{icon}</span>
      <span style={styles.contactText}>{text}</span>
    </div>
  );
}
