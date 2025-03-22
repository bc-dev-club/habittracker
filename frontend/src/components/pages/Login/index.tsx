import { CSSProperties } from "react";

const Styles: { [key: string]: CSSProperties } = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f7f7f7",
        padding: "2rem 1rem",
        boxSizing: "border-box",
      },
      loginForm: {
        display: "flex",
        flexDirection: "column",
        gap: "1.2rem",
        padding: "2rem",
        backgroundColor: "#ececec",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "500px",
      },
      pageTitle: {
        textAlign: "center",
        fontSize: "2rem",
        fontWeight: "bold",
      },
      span: {
        fontWeight: "bold",
      },
      input: {
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "1rem",
      },
      loginButtons: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "1rem",
      },
      button: {
        padding: "10px 20px",
        fontSize: "0.95rem",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      },
      primary: {
        backgroundColor: "#007bff",
        color: "white",
      },
      secondary: {
        backgroundColor: "#6c757d",
        color: "white",
      },
};

export const Login = () => {
    return (
      <>
        <div style={Styles.container}>
            <div style={Styles.loginForm}>
                <h1 style={Styles.pageTitle}>Habit Tracker</h1>

                <span style={Styles.span}>ID</span>
                <input type="text" id="userId" placeholder="ID" style={Styles.input} />

                <span style={Styles.span}>パスワード</span>
                <input type="password" id="password" placeholder="パスワード" style={Styles.input} />

                <div style={Styles.loginButtons}>
                    <button style={{ ...Styles.button, ...Styles.secondary }}>新規登録ページへ</button>
                    <button style={{ ...Styles.button, ...Styles.primary }}>ログイン</button>
                </div>
            </div>
        </div>
      </>
    );
  };