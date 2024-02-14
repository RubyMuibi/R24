import footerStyles from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={footerStyles.container}>
        <div className={footerStyles.left}>
          <p> &copy; 2024 R24 </p>

          <a
            href="https://twitter.com/rubymuibi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p> TWITTER </p>
          </a>

          <a
            href="https://github.com/rubymuibi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p> GITHUB </p>
          </a>
        </div>

        <div className={footerStyles.right}>
          <a
            href="mailto:hi@rubymuibi.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p> CONTACT </p>
          </a>
          <p> TERMS & CONDITIONS </p>
        </div>
      </footer>
    </>
  );
}
