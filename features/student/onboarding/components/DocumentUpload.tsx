"use client"

import { useFileUpload, formatBytes, type FileWithPreview } from "@/hooks/use-file-upload"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CircleAlertIcon, FileTextIcon, XIcon } from "lucide-react"

interface DocumentUploadProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  body?: string
  /** Max file size in bytes. Defaults to 5MB. */
  maxSize?: number
  accept?: string
  showErrors?: boolean
  className?: string
  onFileChange?: (file: FileWithPreview | null) => void
}

const DocumentUpload = ({
  icon: Icon,
  title,
  body,
  maxSize = 5 * 1024 * 1024, // 5MB
  accept = ".pdf,.doc,.docx",
  showErrors = true,
  className,
  onFileChange,
}: DocumentUploadProps) => {
  const [
    { files, isDragging, errors },
    {
      removeFile,
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      getInputProps,
    },
  ] = useFileUpload({
    maxFiles: 1,
    maxSize,
    accept,
    multiple: false,
    onFilesChange: (files) => {
      onFileChange?.(files[0] || null)
    },
  })

  const currentFile = files[0]

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    if (currentFile) removeFile(currentFile.id)
  }

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div
        role="button"
        tabIndex={0}
        onClick={openFileDialog}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") openFileDialog()
        }}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={cn(
          "relative flex min-h-[140px] w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-6 text-center transition-colors",
          isDragging
            ? "border-primary bg-primary/5"
            : "border-muted-foreground/25 hover:border-muted-foreground/40 hover:bg-muted/30",
          currentFile && "border-solid border-muted-foreground/30 bg-muted/10"
        )}
      >
        <input {...getInputProps()} className="sr-only" />

        {currentFile && (
          <Button
            type="button"
            size="icon"
            variant="outline"
            onClick={handleRemove}
            className="absolute end-2 top-2 z-10 size-6 rounded-full bg-background"
            aria-label={`Remove ${currentFile.file.name}`}
          >
            <XIcon className="size-3.5" />
          </Button>
        )}

        {currentFile ? (
          <>
            <FileTextIcon className="text-primary size-7" />
            <p className="w-full max-w-full truncate px-2 text-sm font-medium">
              {currentFile.file.name}
            </p>
            <p className="text-muted-foreground text-xs">
              {formatBytes(currentFile.file.size)}
            </p>
          </>
        ) : (
          <>
            <Icon className="text-muted-foreground size-6" />
            <p className="text-sm font-medium">{title}</p>
            {body && <p className="text-muted-foreground text-xs">{body}</p>}
          </>
        )}
      </div>

      {showErrors && errors.length > 0 && (
        <div className="border-destructive/50 text-destructive flex items-start gap-2 rounded-md border px-3 py-2 text-xs">
          <CircleAlertIcon className="mt-0.5 size-3.5 shrink-0" />
          <div className="space-y-0.5">
            {errors.map((error, index) => (
              <p key={index} className="last:mb-0">
                {error}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default DocumentUpload