import type { Todo } from '../context'
import { useEffect, useRef, useState } from 'react'
import { useTodo } from '../context'
import { Input } from './Input'
import { BsCheck2Square } from 'react-icons/bs'
import { TbRefresh } from 'react-icons/tb'
import { FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { toast } from 'react-hot-toast'
import cn from 'classnames'
import { motion } from 'framer-motion'

export const TodoItem = ({status, text}: Todo ) => {

  return (
    <motion.li
      layout
      className={cn(
        'p-5 rounded-xl bg-zinc-900',
        status === 'completed' && 'bg-opacity-50 text-zinc-500',
      )}
    >
      <motion.span
        layout
        style={{
          textDecoration: status === 'completed' ? 'line-through' : 'none',
        }}
      >
        {text}
      </motion.span>
    </motion.li>
  )
}
