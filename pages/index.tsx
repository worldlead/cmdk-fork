import styles from '../styles/index.module.scss'
import React from 'react'
import { AnimatePresence, motion, MotionProps } from 'framer-motion'
import { RaycastCMDK } from '../components'

type Themes = 'linear' | 'raycast' | 'vercel' | 'framer'

export default function Index() {
  const [theme, setTheme] = React.useState<Themes>('raycast')

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <AnimatePresence mode='wait' initial={false}>
            <CMDKWrapper key="raycast">
              <RaycastCMDK />
            </CMDKWrapper>
        </AnimatePresence>
      </div>
    </main>
  )
}

function CMDKWrapper(props: MotionProps & { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.2 }}
      style={{
        height: 475,
      }}
      {...props}
    />
  )
}









