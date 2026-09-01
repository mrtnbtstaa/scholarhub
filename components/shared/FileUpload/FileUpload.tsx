"use client"

import {
  formatBytes,
  useFileUpload,
  type FileWithPreview,
} from "@/hooks/use-file-upload"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CircleAlertIcon, UserIcon, XIcon, type LucideIcon } from "lucide-react"

interface FileUploadAvatarProps {
  /** Max file size in bytes. Defaults to 2MB. */
  maxSize?: number
  /** Accepted file types, passed straight to the input. Defaults to images only. */
  accept?: string
  /** Pixel size of the preview (applied as both width and height), e.g. 96 = h-24 w-24. */
  size?: number
  width?: number
  height?: number
  /** "circle" for avatars, "square" for logos/thumbnails/etc. */
  shape?: "circle" | "square"
  /** Icon shown when there's no file/defaultImage yet. Defaults to UserIcon. */
  fallbackIcon?: React.ComponentType<{ className?: string }>
  /** Whether to render the built-in error list below the upload control. */
  showErrors?: boolean
  /** Copy shown under the control. Pass "" to hide entirely. */
  label?: string
  helperText?: string
  className?: string
  onFileChange?: (file: FileWithPreview | null) => void
  /** Pre-existing image URL to show before any file is picked (e.g. saved avatar). */
  defaultImage?: string
  /** Fine-grained style overrides without forking the component. */
  classNames?: {
    container?: string
    preview?: string
    removeButton?: string
    icon?: string
  }
}

export function FileUpload({
  maxSize = 2 * 1024 * 1024, // 2MB
  accept = "image/*",
  size = 96,
  width,
  height,
  shape = "circle",
  fallbackIcon: FallbackIcon = UserIcon,
  showErrors = true,
  label,
  helperText,
  className,
  onFileChange,
  defaultImage,
  classNames,
}: FileUploadAvatarProps) {
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
  const previewUrl = currentFile?.preview || defaultImage

  const handleRemove = () => {
    if (currentFile) {
      removeFile(currentFile.id)
    }
  }

  const resolvedLabel =
    label ?? (currentFile ? "File uploaded" : "Upload file")
  const resolvedHelperText =
    helperText ?? `${accept.includes("image") ? "PNG, JPG" : "Files"} up to ${formatBytes(maxSize)}`

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      {/* Preview */}
      <div className="relative">
        <div
          className={cn(
            "group/avatar relative cursor-pointer overflow-hidden border border-dashed transition-colors",
            shape === "circle" ? "rounded-full" : "rounded-md",
            isDragging
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/25 hover:border-muted-foreground/20",
            previewUrl && "border-solid",
            classNames?.preview
          )}
          style={{ height: height || size, width: width || size }}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={openFileDialog}
        >
          <input {...getInputProps()} className="sr-only" />

          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Preview"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <FallbackIcon
                className={cn("text-muted-foreground size-6", classNames?.icon)}
              />
            </div>
          )}
        </div>

        {/* Remove Button - only show when file is uploaded */}
        {currentFile && (
          <Button
            size="icon"
            variant="outline"
            onClick={handleRemove}
            className={cn(
              "absolute end-0.5 top-0.5 z-10 size-6 rounded-full dark:bg-zinc-800 hover:dark:bg-zinc-700",
              classNames?.removeButton
            )}
            aria-label="Remove file"
          >
            <XIcon className="size-3.5" />
          </Button>
        )}
      </div>

      {/* Instructions */}
      {(resolvedLabel || resolvedHelperText) && (
        <div className="space-y-0.5 text-center">
          {resolvedLabel && (
            <p className="text-sm font-medium">{resolvedLabel}</p>
          )}
          {resolvedHelperText && (
            <p className="text-muted-foreground text-xs">{resolvedHelperText}</p>
          )}
        </div>
      )}

      {/* Error Messages */}
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
