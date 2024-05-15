import styles from './Avatar.module.css'

interface AvatarProps {
   src: string
   hasBorder?: boolean
   alt?: string
}

export function Avatar({src, hasBorder = true, alt}: AvatarProps) {
   return (
      <img 
         className={hasBorder === false ? styles.avatarWithBorder : styles.avatar}
         src={src}
         alt={alt}
      />
   )
}