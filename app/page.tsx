"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaBriefcase,
  FaGraduationCap,
  FaUser,
  FaLaptopCode,
  FaPrint,
} from "react-icons/fa";

import { styles } from "@/styles/cvStyles";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main style={styles.main}>
      <div
        style={{
          ...styles.card,
          width: isMobile ? "100%" : "900px",
          padding: isMobile
            ? "25px"
            : "50px 50px 15px 50px",
          position: "relative",
        }}
      >
        {/* ICONO IMPRIMIR */}
        <FaPrint
          onClick={() => window.print()}
          size={18}
          style={{
            position: "absolute",
            top: "25px",
            right: "25px",
            color: "#c86b86",
            cursor: "pointer",
            opacity: 0.8,
            transition: "0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseOut={(e) => (e.currentTarget.style.opacity = "0.8")}
          title="Imprimir hoja de vida"
        />

        {/* HEADER */}
        <div
          style={{
            ...styles.headerContainer,
            flexDirection: isMobile ? "column" : "row",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <div style={styles.photoWrapper}>
            <Image
              src="/foto.png"
              alt="Nine Yohana Jiménez Montenegro"
              width={isMobile ? 150 : 300}
              height={isMobile ? 150 : 300}
              style={styles.photo}
            />
          </div>

          <div style={styles.headerInfo}>
            <h1 style={styles.name}>
              Nine Yohana Jiménez Montenegro
            </h1>

            <div style={styles.subtitle}>
              Ingeniería Industrial | Estrategia Comercial | Transformación Digital
            </div>

            <div style={styles.contact}>
              <div>
                <FaMapMarkerAlt /> Popayán, Colombia
              </div>

              <div>
                <FaEnvelope />{" "}
                <a
                  href="mailto:nineyohanajimenez@gmail.com?subject=Interés%20en%20tu%20perfil%20profesional"
                  style={{
                    textDecoration: "none",
                    color: "#c86b86",
                    fontWeight: 500,
                  }}
                >
                  nineyohanajimenez@gmail.com
                </a>
              </div>

              <div>
                <FaPhoneAlt />{" "}
                <a
                  href="https://wa.me/573137753498?text=Hola%20Nine,%20revisé%20tu%20hoja%20de%20vida%20y%20estoy%20interesado(a)%20en%20tu%20perfil%20profesional."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "#c86b86",
                    fontWeight: 500,
                  }}
                >
                  Contactar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* PERFIL */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>
            <FaUser /> Perfil Profesional
          </div>
          <p style={styles.text}>
            Estudiante de últimos semestres de Ingeniería Industrial en la Fundación Universitaria de Popayán,
            con experiencia en el sector comercial y enfoque en análisis, optimización de procesos y cumplimiento de metas.
            Me destaco por mi orientación a resultados, liderazgo y capacidad de adaptación en entornos dinámicos.
            Cuento con habilidades en posicionamiento de marca y servicio al cliente, aportando soluciones estratégicas
            que contribuyen al crecimiento organizacional. Actualmente complemento mi formación con estudios en programación web,
            fortaleciendo mi perfil técnico y analítico.
          </p>
        </div>

        {/* EXPERIENCIA */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>
            <FaBriefcase /> Experiencia Laboral
          </div>

          <div style={styles.experienceItem}>
            <div style={styles.company}>OPPO Colombia</div>
            <div style={styles.role}>Ventas Máster | 2023 – Actualidad</div>
            <ul style={styles.list}>
              <li>Cumplimiento constante de metas comerciales y manejo de indicadores.</li>
              <li>Posicionamiento estratégico de marca en punto de venta.</li>
              <li>Gestión y fidelización de clientes.</li>
              <li>Trabajo bajo presión en entornos de alta competitividad.</li>
            </ul>
          </div>

          <div style={styles.experienceItem}>
            <div style={styles.company}>Colombina S.A.</div>
            <div style={styles.role}>Pasantía – Área de Microbiología | 2021</div>
            <ul style={styles.list}>
              <li>Apoyo en análisis microbiológicos.</li>
              <li>Cumplimiento de protocolos de calidad.</li>
              <li>Control y seguimiento de procesos en laboratorio.</li>
            </ul>
          </div>
        </div>

        {/* EDUCACIÓN */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>
            <FaGraduationCap /> Formación Académica
          </div>
          <ul style={styles.list}>
            <li>Ingeniería Industrial – Fundación Universitaria de Popayán (En curso)</li>
            <li>Técnico en Agroindustria Alimentaria</li>
            <li>Técnico en Primera Infancia</li>
          </ul>
        </div>

        {/* HABILIDADES */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>
            <FaLaptopCode /> Habilidades
          </div>
          <ul style={styles.list}>
            <li>Ventas y atención al cliente</li>
            <li>Análisis de procesos</li>
            <li>Manejo de indicadores comerciales</li>
            <li>Trabajo en equipo y liderazgo</li>
            <li>Programación web básica</li>
          </ul>
        </div>

        {/* FIRMA CENTRADA */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Image
            src="/firma2.png"
            alt="Firma Nine Montenegro"
            width={150}
            height={55}
            style={{
              objectFit: "contain",
              opacity: 0.6,
            }}
          />
        </div>

      </div>
    </main>
  );
}
