import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaBriefcase,
  FaGraduationCap,
  FaUser,
  FaLaptopCode,
} from "react-icons/fa";

import { styles } from "@/styles/cvStyles";
import ContactRow from "@/components/ContactRow";
import Section from "@/components/Section";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.card}>
        {/* FOTO */}
        <div style={styles.photoWrapper}>
          <Image
            src="/foto.png"
            alt="Nine Yohana Jiménez Montenegro"
            width={300}
            height={400}
            style={styles.photo}
          />
        </div>

        {/* NOMBRE */}
        <h1 style={styles.name}>Nine Yohana Jiménez Montenegro</h1>

        {/* CONTACTO */}
        <div style={styles.contact}>
          <ContactRow icon={<FaMapMarkerAlt />} text="Popayán, Colombia" />
          <ContactRow
            icon={<FaEnvelope />}
            text="nineyohanajimenez@gmail.com"
          />
          <ContactRow icon={<FaPhoneAlt />} text="313 775 3498" />
        </div>

        {/* PERFIL */}
        <Section icon={<FaUser />} title="Perfil Profesional">
          <p style={styles.text}>
            Estudiante de últimos semestres de Ingeniería Industrial en la Fundación Universitaria
            de Popayán, con experiencia en el sector comercial y enfoque en análisis, 
            optimización de procesos y cumplimiento de metas. Me destaco por mi orientación a 
            resultados, liderazgo y capacidad de adaptación en entornos dinámicos. Cuento con 
            habilidades en posicionamiento de marca y servicio al cliente, aportando soluciones 
            estratégicas que contribuyen al crecimiento organizacional. Actualmente complemento 
            mi formación con estudios en programación web, fortaleciendo mi perfil técnico y analítico.
          
          </p>
        </Section>

        {/* EXPERIENCIA */}
        <Section icon={<FaBriefcase />} title="Experiencia Laboral">
          <Experience
            company="OPPO Colombia"
            role="Ventas Máster"
            time="2023 – Actualidad"
            items={[
              "Cumplimiento constante de metas comerciales y manejo de indicadores.",
              "Posicionamiento estratégico de marca en punto de venta.",
              "Gestión y fidelización de clientes.",
              "Trabajo bajo presión en entornos de alta competitividad.",
            ]}
          />

          <Experience
            company="Colombina S.A."
            role="Pasantía – Área de Microbiología"
            time="2021"
            items={[
              "Apoyo en análisis microbiológicos.",
              "Cumplimiento de protocolos de calidad.",
              "Control y seguimiento de procesos en laboratorio.",
            ]}
          />
        </Section>

        {/* EDUCACIÓN */}
        <Section icon={<FaGraduationCap />} title="Formación Académica">
          <ul style={styles.list}>
            <li>
              Ingeniería Industrial – Fundación Universitaria de Popayán (En curso)
            </li>
            <li>Técnico en Agroindustria Alimentaria</li>
            <li>Técnico en Primera Infancia</li>
          </ul>
        </Section>

        {/* HABILIDADES */}
        <Section icon={<FaLaptopCode />} title="Habilidades">
          <ul style={styles.list}>
            <li>Ventas y atención al cliente</li>
            <li>Análisis de procesos</li>
            <li>Manejo de indicadores comerciales</li>
            <li>Trabajo en equipo y liderazgo</li>
            <li>Programación web básica</li>
          </ul>
        </Section>
      </div>
    </main>
  );
}
