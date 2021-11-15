import './Header.css';

const teamMembers = [
  "Anup Kaundinya",
  "Cooper Oatess",
  "Jung Woo Kim",
  "Saif Alqubaisi",
  "Sungwook Huh",
];

export default function Header() {
  return (
    <header className="header">
      <img src="logo_x_white.png" className="logo" alt="logo" />
      <h1>Why Starlink</h1>
      {teamMembers.map((member) => (<h2>{member}</h2>))}
    </header>
  );
}
