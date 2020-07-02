import { Paper } from "@material-ui/core"
import React, { useEffect } from "react"
import ImageUpload from "../../../../modules/shared/imageUpload"

const GeneralLogoSettingsForm = (
  props: Readonly<{ onImageUpload; onImageDelete; settings; onLoad }>
) => {
  useEffect(() => {
    onLoad()
  }, [])

  const { onImageUpload, onImageDelete, settings, onLoad } = props
  const imageUrl = settings && settings.logo ? settings.logo : ""

  return (
    <Paper className="paper-box" elevation={1}>
      <div style={{ padding: 30 }}>
        <ImageUpload
          uploading={false}
          imageUrl={imageUrl}
          onDelete={onImageDelete}
          onUpload={onImageUpload}
          children
        />
      </div>
    </Paper>
  )
}

export default GeneralLogoSettingsForm
