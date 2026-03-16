import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import PageShell from '../components/PageShell';
import Pricing from '../components/Pricing';
import { PRICING_FACTORS, ROI_METRICS } from '../constants/siteContent';
import { C } from '../constants/theme';

const W = Dimensions.get('window').width;
const PAD = W > 600 ? 40 : 20;
const CARD_WIDTH = W > 860 ? '23.5%' : W > 560 ? '48.5%' : '100%';

export default function PricingPage() {
  return (
    <PageShell>
      <Pricing />

      <View style={styles.section}>
        <Text style={styles.label}>What shapes price</Text>
        <View style={styles.factorCard}>
          {PRICING_FACTORS.map(item => (
            <View key={item} style={styles.item}>
              <View style={styles.dot} />
              <Text style={styles.itemText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Expected value</Text>
        <View style={styles.grid}>
          {ROI_METRICS.map(metric => (
            <View key={metric.label} style={styles.metricCard}>
              <Text style={styles.metricValue}>{metric.value}</Text>
              <Text style={styles.metricLabel}>{metric.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </PageShell>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: PAD,
    paddingBottom: 40,
    maxWidth: 1100,
    width: '100%',
    alignSelf: 'center',
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    color: C.green,
    marginBottom: 12,
  },
  factorCard: {
    backgroundColor: '#F5F2EB',
    borderRadius: 14,
    padding: 22,
    gap: 12,
  },
  item: { flexDirection: 'row', gap: 10, alignItems: 'flex-start' },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: C.green,
    marginTop: 7,
  },
  itemText: { flex: 1, fontSize: 15, lineHeight: 24, color: C.muted },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 18 },
  metricCard: {
    width: CARD_WIDTH as any,
    backgroundColor: C.white,
    borderWidth: 0.5,
    borderColor: '#d9e4db',
    borderRadius: 14,
    padding: 22,
    gap: 10,
  },
  metricValue: {
    fontSize: 28,
    fontWeight: '700',
    color: C.forest,
    letterSpacing: -0.7,
  },
  metricLabel: { fontSize: 15, lineHeight: 22, color: C.muted },
});
