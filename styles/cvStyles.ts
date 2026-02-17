export const styles = {
  main: {
    backgroundColor: "#f4f6f9",
    minHeight: "100vh",
    padding: "40px 20px",
    display: "flex",
    justifyContent: "center",
  },

  card: {
    backgroundColor: "#ffffff",
    width: "900px",
    padding: "50px",
    borderRadius: "20px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
  },

  /* HEADER */
  headerContainer: {
    display: "flex",
    gap: "40px",
    alignItems: "center",
    marginBottom: "40px",
  },

  photoWrapper: {
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "4px solid #f3c1cf",
    flexShrink: 0,
  },

  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
  },

  headerInfo: {
    flex: 1,
  },

  name: {
    fontSize: "32px",
    fontWeight: 600,
    color: "#c86b86",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "16px",
    color: "#777",
    marginBottom: "15px",
  },

  contact: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "6px",
    color: "#555",
    fontSize: "14px",
  },

  /* SECCIONES */
  section: {
    marginTop: "35px",
  },

  sectionTitle: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "linear-gradient(90deg, #fde4ec, #f9d7e1)",
    padding: "12px 18px",
    borderRadius: "12px",
    fontWeight: 600,
    color: "#b85c76",
    marginBottom: "15px",
  },

  text: {
    textAlign: "justify" as const,
    lineHeight: "1.7",
    color: "#444",
  },

  list: {
    paddingLeft: "20px",
    lineHeight: "1.8",
    color: "#444",
  },

  experienceItem: {
    marginBottom: "20px",
  },

  company: {
    fontWeight: 600,
    color: "#333",
  },

  role: {
    color: "#777",
    fontSize: "14px",
    marginBottom: "8px",
  },
};
