import { styles } from "@/styles/cvStyles";

interface Props {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export default function Section({ icon, title, children }: Props) {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>
        <span style={styles.sectionIcon}>{icon}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}
