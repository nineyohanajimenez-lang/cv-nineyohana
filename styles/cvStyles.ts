export const styles = {
  main: {
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
    padding: "60px 20px",
    display: "flex",
    justifyContent: "center",
  },

  card: {
    backgroundColor: "#ffffff",
    width: "850px",
    padding: "50px",
    borderRadius: "18px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
  },

  /* FOTO */

  photoWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "25px",
  },

  photo: {
    borderRadius: "50%",
    objectFit: "cover" as const,
    border: "4px solid #e6e6e6",
  },

  /* NOMBRE */

  name: {
    textAlign: "center" as const,
    color: "#c86b85",
    fontSize: "34px",
    fontWeight: "600",
    marginBottom: "8px",
  },

  /* CONTACTO */

  contact: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    marginBottom: "40px",
  },

  contactRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "8px",
  },

  iconBox: {
    color: "#c86b85",
    fontSize: "16px",
  },

  contactText: {
    fontSize: "14px",
    color: "#555",
  },

  /* SECCIONES */

  section: {
    marginBottom: "35px",
  },

  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "15px",
    color: "#c86b85",
    fontSize: "18px",
    fontWeight: "600",
  },

  text: {
    fontSize: "15px",
    lineHeight: "1.7",
    color: "#444",
    textAlign: "justify" as const,
  },

  list: {
    paddingLeft: "20px",
    lineHeight: "1.8",
    color: "#444",
  },

  /* EXPERIENCIA */

  experienceItem: {
    marginBottom: "20px",
  },

  experienceHeader: {
    fontWeight: "600",
    fontSize: "16px",
    marginBottom: "5px",
  },

  experienceTime: {
    fontSize: "13px",
    color: "#888",
    marginBottom: "8px",
  },

  /* BOTÓN WHATSAPP */

  whatsappButton: {
    display: "inline-block",
    marginTop: "15px",
    padding: "10px 18px",
    backgroundColor: "#25D366",
    color: "#ffffff",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "14px",
  },
};

