import React from 'react'
import { Card, Text, Flex } from '@sanity/ui'
import { useFormValue } from 'sanity'

export function PreviewLink() {
  const slug = useFormValue(['slug', 'current']) as string

  if (!slug) {
    return (
      <Card padding={3} radius={2} shadow={1} tone="transparent">
        <Text size={1} muted>Generate a URL slug above to see the preview link.</Text>
      </Card>
    )
  }

  const url = `https://www.yapchankor.com/en/lp/${slug}`

  return (
    <Card padding={3} radius={2} shadow={1} tone="primary">
      <Flex align="center" gap={2}>
        <Text size={2} weight="semibold">
          <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
            Open Live Preview ↗
          </a>
        </Text>
      </Flex>
    </Card>
  )
}
