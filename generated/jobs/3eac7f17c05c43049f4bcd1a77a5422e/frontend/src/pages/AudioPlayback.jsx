import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function AudioPlayback() {
  return (
<div className="min-h-screen">
  <div className="flex justify-center items-center h-full">
    <audio controls>
      <source src="/static/sample.mp3" type="audio/mpeg"/>
      Your browser does not support the audio element.
    </audio>
  </div>
</div>
  )
}