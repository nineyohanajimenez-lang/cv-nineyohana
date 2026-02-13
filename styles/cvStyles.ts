export const styles = {
  main: {
    minHeight: "100vh",
    backgroundColor: "#faf7f8",
    display: "flex",
    justifyContent: "center",
    padding: "40px 20px",
    fontFamily: "'Segoe UI', sans-serif",
  },

  card: {
    backgroundColor: "#ffffff",
    padding: "40px 50px",
    borderRadius: "24px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
    maxWidth: "820px",
    width: "100%",
  },

  photoWrapper: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "4px solid #f1b6c1",
    margin: "0 auto 20px auto",
  },

  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    objectPosition: "50% 25%",
  },

  name: {
    textAlign: "center" as const,
    fontSize: "28px",
    color: "#c86b86",
    fontWeight: 500,
    marginBottom: "20px",
  },

  contact: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
    alignItems: "center",
    marginBottom: "35px",
  },

  contactRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  contactText: {
    color: "#3f3f3f",
    fontSize: "15px",
  },

  iconBox: {
    width: "22px",
    display: "flex",
    justifyContent: "center",
    color: "#e7a1b0",
  },

  section: {
    marginBottom: "30px",
  },

  sectionTitle: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "21px",
    color: "#c86b86",
    marginBottom: "12px",
  },

  sectionIcon: {
    color: "#e7a1b0",
  },

  text: {
    color: "#3f3f3f",
    lineHeight: "1.6",
    fontSize: "15px",
  },

  experience: {
    marginBottom: "18px",
  },

  company: {
    color: "#3f3f3f",
    fontWeight: 600,
  },

  role: {
    fontSize: "14px",
    color: "#5f5f5f",
    marginBottom: "6px",
  },

  list: {
    paddingLeft: "20px",
    color: "#3f3f3f",
    lineHeight: "1.6",
  },
};
