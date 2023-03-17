import { MaterialUI } from './style';

interface AvatarProps {
  username: string;
  variant?: 'big';
}

export const Avatar = ({ username, variant }: AvatarProps) => {
  return (
    <MaterialUI variant={variant}>
      {username.split(' ').length > 1
        ? username.split(' ')[0][0] + username.split(' ')[1][0]
        : username.split(' ')[0][0]}
    </MaterialUI>
  );
};
