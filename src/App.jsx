import { Grid2X2 } from "lucide-react";
import { Github } from "lucide-react";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            height: "82px",
            position: "sticky",
            top: 0,
            padding: "8px",
            backgroundColor: "#ffffff",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src="/assets/Fasal.png"
            alt="Logo"
            style={{
              borderRadius: "16px",
              height: "64px",
              border: "1px solid grey",
            }}
          />
          <h2 style={{ marginLeft: "16px" }}>Fasal Guru</h2>
        </div>
      </header>
      <main
        style={{
          width: "100%",
          minHeight: "calc(100vh - 82px)",
          backgroundImage: "url('/assets/waves.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100% 0%",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            width: "90%",
            maxWidth: "800px",
            margin: "20px auto",
            padding: "32px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            textAlign: "center",
            position: "relative",
          }}
        >

          <h1
            style={{
              fontSize: "2.5rem",
              marginBottom: "16px",
              color: "#333",
            }}
          >
            Download Our App Today!
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "24px",
              color: "#555",
              maxWidth: "600px",
            }}
          >
            Get access to exclusive features, real-time updates, and a seamless
            farming experience with the Fasal Guru app.
          </p>

          <div style={{ display: "flex", gap: "16px" }}>
            <a
              href="https://github.com/FasalGuru"
              target="main"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#000",
                color: "#fff",
                padding: "12px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              <span style={{ fontSize: "24px" }}>●</span>
                Github Repo <Github />
            </a>

            <a
              href="https://drive.google.com/uc?export=download&id=1yW-CvWT9L7v8AjLzOjstIrzXuhm17Afq"
              download
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#4CAF50",
                color: "#fff",
                padding: "12px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              <span style={{ fontSize: "24px" }}>●</span>
              Download for <Grid2X2/>
            </a>
          </div>

          <div
            style={{
              marginTop: "32px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <img
              src="/assets/screenshot.png"
              alt="App Screenshot"
              style={{
                height: "200px",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />
            <div>
              <h3 style={{ color: "#333", marginBottom: "8px" }}>
                Why download our app?
              </h3>
              <ul
                style={{
                  textAlign: "left",
                  color: "#555",
                  paddingLeft: "20px",
                }}
              >
                <li>Predict the Best Crops for your fields</li>
                <li>Get a leg up <b>Diagnose crop diseases</b></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
