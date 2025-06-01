import "../styles/notes/notes.css";

export default function Notes() {
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
