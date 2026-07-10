import Box from "@/common/box";
import Container from "@/common/container";
import Typography from "@/common/typography";
import { TICKER_ITEMS } from "@/data/notifications";

export default function NotificationTicker() {
  return (
    <Box className="ticker">
      <Container className="ticker__inner">
        <Typography as="span" className="ticker__tag">
          Latest
        </Typography>
        <Box className="ticker__track">
          <Box className="ticker__marquee">
            {TICKER_ITEMS.map((item) => (
              <Typography as="span" key={item.headline} className="ticker__item">
                <Typography as="span" className="ticker__headline">
                  {item.headline}
                </Typography>
                {item.detail}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
