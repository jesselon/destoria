import React, { useRef, useState, useContext, useEffect } from "react";
import s from "./styles";
import { motion } from "framer-motion";
import { useDimensions } from "hooks/useDimensions";
import { Context } from "contexts/Dropdown";

let lastOptionId = 0;

export function DropdownOption({ name, content: Content, backgroundHeight, backgroundWidth }) {
  const idRef = useRef(++lastOptionId);
  const id = idRef.current;

  const [optionHook, optionDimensions] = useDimensions();
  const [registered, setRegistered] = useState(false);

  const {
    registerOption,
    updateOptionProps,
    deleteOptionById,
    setTargetId,
    targetId,
  } = useContext(Context);

  useEffect(() => {
    if (!registered && optionDimensions) {
      const WrappedContent = () => {
        const contentRef = useRef<HTMLDivElement>();

        useEffect(() => {
          const contentDimensions = contentRef.current && contentRef.current.getBoundingClientRect()
          updateOptionProps(id, { contentDimensions })
        }, [])

        return (
          <div ref={contentRef}>
            <Content/>
          </div>
        )
      }

      registerOption({
        id,
        optionDimensions,
        optionCenterX: optionDimensions.x + optionDimensions.width / 2,
        WrappedContent,
        backgroundHeight,
        backgroundWidth
      })

      setRegistered(true)
    } else if (registered && optionDimensions) {
      updateOptionProps(id, {
        optionDimensions,
        optionCenterX: optionDimensions.x + optionDimensions.width / 2
      })
    }
  }, [
    registerOption,
    id,
    registered,
    optionDimensions,
    updateOptionProps,
    deleteOptionById,
    backgroundHeight,
    backgroundWidth
  ])

  const handleOpen = () => setTargetId(id)
  const handleClose = () => setTargetId(null)
  const handleTouch = () => (window.isMobile = true)

  const handleClick = (e) => {
    e.preventDefault()

    return targetId === id ? handleClose() : handleOpen()
  }


  return (
    <motion.li
      {...s.navLi}
      ref={optionHook}
      onMouseDown={handleClick}
      onHoverStart={() => !window.isMobile && handleOpen()}
      onHoverEnd={() => !window.isMobile && handleClose()}
      onTouchStart={handleTouch}
      onFocus={handleOpen}
      onBlur={handleClose}
    >
      {name}
    </motion.li>
  );
}