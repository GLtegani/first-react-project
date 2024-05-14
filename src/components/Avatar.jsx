import styles from './Avatar.module.css'

export function Avatar({src, hasBorder = true}) {
   return (
      <img 
         className={hasBorder != false ? styles.avatar : styles.avatarWithBorder}
         src={src}
         alt=''
      />
   )
}