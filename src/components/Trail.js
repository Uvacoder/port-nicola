import React from 'react'
import { useTrail, a } from '@react-spring/web'



export default function Trail ({ open, children }) {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 50, tension: 4000, friction: 4000 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 1,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className="trailsText" style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

// export default function App() {
//   const [open, set] = useState(true)
//   return (
//     <div className={styles.container} onClick={() => set(state => !state)}>
//       <Trail open={open}>
//         <span>Lorem</span>
//         <span>Ipsum</span>
//         <span>Dolor</span>
//         <span>Sit</span>
//       </Trail>
//     </div>
//   )
// }
