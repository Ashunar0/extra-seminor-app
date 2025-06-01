import { useEffect, useState } from "react";
import "../styles/notes/notes.css";
import { auth } from "../firebase";
import { useNavigate } from "@remix-run/react";
import { onAuthStateChanged } from "firebase/auth";

export default function Notes() {
  const [user, setUser] = useState(auth.currentUser);

  const navigate = useNavigate();

  // ログインしていない場合はログイン画面にリダイレクト
  // 難しいので解説は飛ばします
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        // ログアウトされてたらリダイレクト
        navigate("/sign-in");
      }
    });

    // クリーンアップ
    return () => unsubscribe();
  }, [navigate]);

  // 読み込み中の表示
  // ここも難しいので解説は飛ばします
  if (!user) {
    // 状態がまだ読み込まれてない場合（読み込み中）のフェイルセーフ
    return <p>読み込み中...</p>;
  }

  return (
    <div className="notes-page">
      <header>
        <h1>ノート</h1>
        <p>test@example.com</p>
        <button>ログアウト</button>
      </header>

      <main>
        <div className="sidebar">
          <div className="create-note">New Note</div>

          <hr className="divider" />

          <div className="notes">
            <div className="note">ノート1</div>
            <div className="note">ノート2</div>
            <div className="note">ノート3</div>
          </div>
        </div>
      </main>
    </div>
  );
}
