import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
   return (
      <div className={styles.comment}>
         <img src="https://github.com/GLtegani.png" />

         <div className={styles.commentBox}>
            <div className={styles.commentContent}>
               <header>
                  <div className={styles.authorAndTime}>
                     <strong>Gabriel Tegani</strong>

                     <time title='11 de Maio às 08:13' dateTime="2023-05-11 08:13:56">
                        Cerca de 1h atrás
                     </time>
                  </div>

                  <button title='Deletar comentário'>
                     <Trash size={20} />
                  </button>
               </header>

               <p>
                  Muito bom Devon, parabéns!!
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