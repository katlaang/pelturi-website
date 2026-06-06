import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Href, Link } from 'expo-router';

import { FOOTER_LINKS } from '../constants/siteContent';
import { C } from '../constants/theme';

const W = Dimensions.get('window').width;
const PAD = W > 600 ? 40 : 20;

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.brandBlock}>
        <Text style={styles.copy}>Pelturi</Text>
        <Text style={styles.subcopy}>
          Offline-first pest scouting for greenhouse and field operations.
        </Text>
      </View>

      <View style={styles.links}>
        {FOOTER_LINKS.map(link => (
          <Link key={link.href} href={link.href as Href} asChild>
            <TouchableOpacity>
              <Text style={styles.link}>{link.label}</Text>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#F5F2EB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: PAD,
    paddingVertical: 28,
    borderTopWidth: 0.5,
    borderTopColor: '#d7d1c5',
    flexWrap: 'wrap',
    gap: 12,
  },
  brandBlock: { gap: 4 },
  copy: { fontSize: 14, color: C.forest, fontWeight: '700' },
  subcopy: { fontSize: 13, color: C.muted },
  links: { flexDirection: 'row', gap: 20, flexWrap: 'wrap' },
  link: { fontSize: 13, color: C.green, fontWeight: '600' },
});
