import ColorDemo from "../components/ColorDemo";
import TypographyDemo from "../components/TypographyDemo";
import SpacingAndSizingDemo from "../components/SpacingAndSizingDemo";
import FlexboxDemo from "../components/FlexboxDemo";
import GridDemo from "../components/GridDemo";
import TailwindCoreConcepts from "../components/CoreConceptsDemo";
import LayoutExample from "../components/LayoutExample";
import BackgroundDemo from "../components/BackgroundDemo";
import BorderDemo from "../components/BorderDemo";
import EffectsDemo from "../components/EffectsDemo";
import FiltersDemo from "../components/FiltersDemo";
import TablesDemo from "../components/TablesDemo";
import TransitionsAnimationDemo from "../components/TransitionsAnimationDemo";
import TransformDemo from "../components/TransformDemo";
import InteractivityDemo from "../components/InteractivityDemo";
import SvgDemo from "../components/SvgDemo";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <TailwindCoreConcepts />
      <LayoutExample />
      <FlexboxDemo />
      <GridDemo />
      <SpacingAndSizingDemo />
      <TypographyDemo />
      <ColorDemo />
      <BackgroundDemo />
      <BorderDemo />
      <EffectsDemo />
      <FiltersDemo />
      <TablesDemo />
      <TransitionsAnimationDemo />
      <TransformDemo />
      <InteractivityDemo />
      <SvgDemo />
    </div>
  );
}
