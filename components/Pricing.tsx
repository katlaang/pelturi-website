import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { PRICING_MODELS } from '../constants/siteContent';
import { C } from '../constants/theme';

const W = Dimensions.get('window').width;
const PAD = W > 600 ? 40 : 20;
const IS_WIDE = W > 800;

export default function Pricing() {
  return (
    <View style={styles.section}>
      <Text style={styles.label}>Pricing approach</Text>
      <Text style={styles.heading}>Scope-based rollout,{'\n'}not one-size-fits-all.</Text>
      <Text style={styles.sub}>
        Pricing is being shaped around rollout scope, number of farms, user counts, and support
        needs rather than fixed placeholder plans.
      </Text>

      <View style={[styles.grid, IS_WIDE && { flexDirection: 'row' }]}>
        {PRICING_MODELS.map(plan => (
          <View
            key={plan.name}
            style={[
              styles.plan,
              plan.featured && styles.planFeatured,
              IS_WIDE && { flex: 1 },
            ]}
          >
            {plan.featured && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Current focus</Text>
              </View>
            )}

            <Text style={styles.planName}>{plan.name}</Text>

            <View style={styles.priceRow}>
              <Text style={styles.price}>{plan.price}</Text>
              {plan.period ? <Text style={styles.period}>{plan.period}</Text> : null}
            </View>

            <Text style={styles.desc}>{plan.desc}</Text>

            <View style={styles.divider} />

            {plan.items.map(item => (
              <View key={item} style={styles.item}>
                <View style={[styles.check, plan.featured && { backgroundColor: C.green }]} />
                <Text style={styles.itemText}>{item}</Text>
              </View>
            ))}

            <TouchableOpacity style={[styles.planBtn, plan.featured && styles.planBtnFeatured]}>
              <Text style={[styles.planBtnText, plan.featured && { color: C.white }]}>
                {plan.cta}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: 60,
    paddingHorizontal: PAD,
    backgroundColor: C.white,
  },
  label: {
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    color: C.green,
    marginBottom: 10,
  },
  heading: {
    fontSize: W > 600 ? 36 : 28,
    fontWeight: '700',
    color: C.dark,
    letterSpacing: -0.8,
    lineHeight: W > 600 ? 44 : 36,
    marginBottom: 12,
  },
  sub: {
    fontSize: 15,
    color: C.muted,
    lineHeight: 24,
    marginBottom: 40,
    maxWidth: 620,
  },
  grid: { flexDirection: 'column', gap: 16 },
  plan: {
    backgroundColor: C.white,
    borderWidth: 0.5,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    padding: 24,
  },
  planFeatured: { borderWidth: 2, borderColor: C.green },
  badge: {
    backgroundColor: C.green,
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 20,
    marginBottom: 14,
  },
  badgeText: { color: C.white, fontSize: 11, fontWeight: '600' },
  planName: { fontSize: 13, color: C.muted, fontWeight: '500', marginBottom: 4 },
  priceRow: { flexDirection: 'row', alignItems: 'flex-end', marginBottom: 8 },
  price: { fontSize: 30, fontWeight: '700', color: C.dark, letterSpacing: -1 },
  period: { fontSize: 14, color: C.muted, paddingBottom: 6, marginLeft: 2 },
  desc: { fontSize: 13, color: C.muted, lineHeight: 20, marginBottom: 18 },
  divider: { height: 0.5, backgroundColor: '#e8e8e8', marginBottom: 18 },
  item: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 9 },
  check: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#dde8d8',
  },
  itemText: { fontSize: 13, color: C.charcoal },
  planBtn: {
    marginTop: 20,
    borderWidth: 0.5,
    borderColor: '#ddd',
    borderRadius: 6,
    paddingVertical: 11,
    alignItems: 'center',
  },
  planBtnFeatured: { backgroundColor: C.green, borderColor: C.green },
  planBtnText: { fontSize: 13, fontWeight: '600', color: C.dark },
});
