import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className="bg-slate-950 w-full h-[100px] flex justify-end items-end">
      <div className="text-white flex gap-2 m-2">
        <a href="https://github.com/KrystianRusin">
          <GitHubIcon />
        </a>
        <p>Developed by Krystian Rusin</p>
      </div>
    </div>
  );
};

export default Footer;
