import { Grid, Card } from '@geist-ui/core';
import { StudioWrapper } from '@my-home-builder/studio';

export function Index() {
  return (
    <Grid.Container justify="center" style={{ minHeight: '100vh' }}>
      <Grid xs={6} margin={4}>
        <StudioWrapper />
      </Grid>
      <Grid xs={6} margin={4}>
        <Card shadow width="100%" />
      </Grid>
      <Grid xs={6} margin={4}>
        <Card shadow width="100%" />
      </Grid>
    </Grid.Container>
  );
}

export default Index;
