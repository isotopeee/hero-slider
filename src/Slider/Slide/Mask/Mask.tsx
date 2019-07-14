import * as React from 'react'
// Types
import { IBackgroundProps } from '../../typings'
// CSS
import classes from './Mask.module.css'
// JSX
import LazyLoad from 'react-lazyload'

interface IMaskProps {
  isActive: boolean
  isDoneSliding: boolean
  background: IBackgroundProps
}

const mask = (props: IMaskProps) => {
  const { background } = props

  const [className, setClassName] = React.useState(classes.Loading)

  const onLoadHandler = () => {
    setClassName(classes.Loaded)
  }

  const style: React.CSSProperties = React.useMemo(() => {
    return {
      backgroundColor: background.backgroundColor,
      backgroundBlendMode: background.maskBackgroundBlendMode,
      backgroundImage: `url('${background.backgroundImage}')`
    } as React.CSSProperties
  }, [])

  const isLoaded = className === classes.Loaded

  // tslint:disable-next-line: strict-type-predicates
  const offset = typeof window !== 'undefined' ? window.innerHeight : 0

  return (
    <div
      className={[
        classes.Mask,
        (props.isActive && props.isDoneSliding) ? classes.Active : classes.Inactive
      ].join(' ')}>
      <LazyLoad
        offset={offset}
        debounce={false}
        height='100%'>
        <img
          className={classes.Loader}
          onLoad={onLoadHandler}
          src={background.backgroundImage}/>
        {isLoaded && (
          <div
          style={style}
          className={[
            className,
            isLoaded && classes.Inner,
            isLoaded && !props.isDoneSliding && classes.Sliding
          ].join(' ')} />
        )}
    </LazyLoad>
    </div>
  )
}

export default mask
