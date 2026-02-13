import { styles } from "@/styles/cvStyles";

interface Props {
  company: string;
  role: string;
  time: string;
  items: string[];
}

export default function Experience({ company, role, time, items }: Props) {
  return (
    <div style={styles.experience}>
      <h3 style={styles.company}>{company}</h3>
      <p style={styles.role}>
        {role} | {time}
      </p>
      <ul style={styles.list}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
