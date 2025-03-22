import { CSSProperties, useState } from "react";
import { useNavigate } from "react-router-dom";
import eyeOpen from "../../../assets/visibility.svg";
import eyeClosed from "../../../assets/visibility_off.svg";

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
      passwordWrapper: {
        position: "relative",
        width: "100%",
      },
      passwordInput: {
        padding: "10px 40px 10px 10px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "1rem",
        width: "100%",
        boxSizing: "border-box",
      },
      eyeInside: {
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        width: "20px",
        height: "20px",
        cursor: "pointer",
        opacity: 0.6,
      },
};


export const Signin = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    
    const handleSignin = () => {
        navigate("/");
    };

    const handleRegister = () => {
    navigate("/Register");
    };
    
    return (
      <>
        <div style={Styles.container}>
            <div style={Styles.loginForm}>
                <h1 style={Styles.pageTitle}>Habit Tracker</h1>

                <span style={Styles.span}>ID</span>
                <input type="text" id="userId" placeholder="ID" style={Styles.input} />

                <span style={Styles.span}>パスワード</span>
                <div style={Styles.passwordWrapper}>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="パスワード"
                    style={Styles.passwordInput}
                  />
                  <img
                    src={showPassword ? eyeClosed : eyeOpen}
                    alt="Toggle visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    style={Styles.eyeInside}
                  />
                </div>

                <div style={Styles.loginButtons}>
                    <button style={{ ...Styles.button, ...Styles.secondary }} onClick={handleRegister}>新規登録ページへ</button>
                    <button style={{ ...Styles.button, ...Styles.primary }} onClick={handleSignin}>ログイン</button>
                </div>
            </div>
        </div>
      </>
    );
  };