import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar.jsx'

export function Comment({content, onDeleteComment}) {
   const handleDeleteComment = () => {
      onDeleteComment(content);
   }

   return (
      <div className={styles.comment}>
         <Avatar hasBorder={false} src="https://github.com/GLtegani.png" />

         <div className={styles.commentBox}>
            <div className={styles.commentContent}>
               <header>
                  <div className={styles.authorAndTime}>
                     <strong>Gabriel Tegani</strong>

                     <time title='11 de Maio às 08:13' dateTime="2023-05-11 08:13:56">
                        Cerca de 1h atrás
                     </time>
                  </div>

                  <button onClick={handleDeleteComment} title='Deletar comentário'>
                     <Trash size={24} />
                  </button>
               </header>

               <p>
                  {content}
               </p>
            </div>

            <footer>
               <button>
                  <ThumbsUp />
                  Aplaudir <span>24</span>
               </button>
            </footer>
         </div>
      </div>
   )
}