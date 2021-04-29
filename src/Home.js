import React from 'react'
import { useForm, usePlugin, useCMS } from 'tinacms'
import { InlineForm, InlineBlocks } from 'react-tinacms-inline'
import { heroBlock } from './components/Hero'
import data from './data/data.json'

export default function Home() {
  const cms = useCMS()

  const formConfig = {
    id: './data/data.json',
    initialValues: data,
    onSubmit() {
      cms.alerts.success('Saved!')
    },
  }

  const [, form] = useForm(formConfig)
  usePlugin(form)

  return (
    <div className="home">
      <InlineForm form={form}>
        <InlineBlocks name="blocks" blocks={HOME_BLOCKS} />
      </InlineForm>
    </div>
  )
}

const HOME_BLOCKS = {
  hero:heroBlock,
}
