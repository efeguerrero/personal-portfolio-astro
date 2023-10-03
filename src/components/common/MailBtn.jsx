const MailBtn = () => {
  return (
    <a
      href="mailto:fr?ncisco.guerrero.d??vATgmailDOTcom"
      className="py-3 px-8 rounded-lg capitalize text-neutral-400 bg-neutral-950/60"
      onClick={(e) =>
        (e.target.href = e.target.href
          .replace('AT', '@')
          .replace('?', 'a')
          .replace('DOT', '.')
          .replace('??', 'e'))
      }
    >
      mail me
    </a>
  );
};

export default MailBtn;
