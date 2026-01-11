import styles from "./ProfileCard.module.css";

interface ProfileCardProps {
  avatar: string;
  name: string;
  description: string;
}

function ProfileCard({ avatar, name, description }: ProfileCardProps) {
  return (
    <div className={styles.profileCard}>
      <img src={avatar} alt={`avatar of ${name}`} className={styles.avatar} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProfileCard;