import "../styles/auth/sign-in.css";

export default function SignIn() {
  return (
    <div className="sign-in-page">
      <h1>ログイン</h1>

      <div className="sign-in-form">
        <form>
          {/* メールアドレス */}
          <div className="form-group">
            <label htmlFor="email">メールアドレス</label>
            <input type="email" name="email" required />
          </div>
          {/* パスワード */}
          <div className="form-group">
            <label htmlFor="password">パスワード</label>
            <input type="password" name="password" required />
          </div>
          <button type="submit" className="sign-in-button">
            ログイン
          </button>
        </form>
        <button className="google-button">Googleでログイン</button>
        <p>新規登録はこちら</p>
      </div>
    </div>
  );
}
