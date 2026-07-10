import Image from "next/image";
import Link from "next/link";
import Box from "@/common/box";
import Typography from "@/common/typography";
import { Assets } from "@/data/assets";
import { Routes } from "@/data/routes";
import { Site } from "@/data/site";

export type BrandProps = {
  size?: number;
  /** The drawer omits the sub-line and shrinks the wordmark. */
  compact?: boolean;
  onNavigate?: () => void;
};

/** Crest + wordmark. Shared by the header bar and the mobile drawer. */
export default function Brand({ size = 56, compact, onNavigate }: BrandProps) {
  return (
    <Link className="brand" href={Routes.home} onClick={onNavigate}>
      <Image
        src={Assets.logo}
        alt={compact ? "" : Site.crestAlt}
        width={size}
        height={size}
        className="brand__crest"
        priority
      />
      <Box className="brand__text">
        <Typography
          as="span"
          className={`brand__name${compact ? " brand__name--compact" : ""}`}
        >
          {Site.name}
        </Typography>
        {compact ? null : (
          <Typography as="span" className="brand__sub">
            {Site.location}
          </Typography>
        )}
      </Box>
    </Link>
  );
}
