import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Angel Duran",
    isFollowing: true,
  },
  {
    userName: "alex148m",
    name: "Alejandro Martinez Puente",
    isFollowing: true,
  },
  {
    userName: "david",
    name: "David Romano Ruiz",
    isFollowing: false,
  },
  {
    userName: "adriana",
    name: "Adriana Fernandez Perez",
    isFollowing: false,
  },
];

export function App() {
    return (
    <section className="App">
      {
      users.map(({ userName, name, isFollowing }) =>
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        )
      }
    </section>
  )
}
