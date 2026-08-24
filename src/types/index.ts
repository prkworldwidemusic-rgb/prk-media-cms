export interface Profile {
  id: string
  email: string
  full_name: string
  avatar_url?: string
  role: 'admin' | 'manager' | 'user'
  created_at: string
  updated_at: string
}

export interface Asset {
  id: string
  title: string
  description?: string
  type: 'audio' | 'video'
  duration: number
  file_url: string
  thumbnail_url?: string
  metadata: Record<string, any>
  status: 'draft' | 'published' | 'archived'
  created_by: string
  created_at: string
  updated_at: string
}

export interface Claim {
  id: string
  asset_id: string
  claimant_id: string
  claim_type: 'copyright' | 'performance' | 'sync'
  status: 'pending' | 'approved' | 'rejected' | 'disputed'
  evidence_url?: string
  created_at: string
  updated_at: string
}

export interface Match {
  id: string
  asset_id: string
  reference_id: string
  confidence: number
  match_type: 'audio' | 'video' | 'metadata'
  status: 'new' | 'reviewed' | 'resolved'
  created_at: string
  updated_at: string
}

export interface ReferenceFile {
  id: string
  title: string
  description?: string
  file_url: string
  file_type: 'audio' | 'video' | 'metadata'
  status: 'active' | 'inactive' | 'archived'
  created_at: string
  updated_at: string
}

export interface Policy {
  id: string
  name: string
  description: string
  rules_json: Record<string, any>
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface MatchRule {
  id: string
  policy_id: string
  rule_type: 'threshold' | 'duration' | 'metadata'
  condition: Record<string, any>
  action: 'flag' | 'review' | 'auto_approve'
  priority: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface License {
  id: string
  asset_id: string
  licensee: string
  license_type: 'exclusive' | 'non-exclusive' | 'compulsory'
  territory: string
  start_date: string
  end_date: string
  status: 'active' | 'expired' | 'terminated'
  created_at: string
  updated_at: string
}

export interface RightsHolder {
  id: string
  name: string
  email: string
  contact_info: Record<string, any>
  entity_type: 'individual' | 'organization'
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Channel {
  id: string
  platform: 'youtube' | 'spotify' | 'apple_music' | 'other'
  channel_name: string
  channel_id: string
  api_key?: string
  status: 'connected' | 'disconnected' | 'error'
  last_sync: string
  created_at: string
  updated_at: string
}

export interface DMCANotice {
  id: string
  asset_id: string
  claimant: string
  notice_date: string
  content_url: string
  status: 'received' | 'processed' | 'resolved'
  action_taken?: string
  created_at: string
  updated_at: string
}

export interface Takedown {
  id: string
  asset_id: string
  channel_id: string
  reason: string
  takedown_date: string
  status: 'pending' | 'completed' | 'appealed'
  appeal_reason?: string
  created_at: string
  updated_at: string
}

export interface Strike {
  id: string
  channel_id: string
  strike_date: string
  reason: string
  status: 'active' | 'resolved' | 'expired'
  expiry_date: string
  created_at: string
  updated_at: string
}

export interface Ownership {
  id: string
  asset_id: string
  owner_id: string
  ownership_percentage: number
  ownership_type: 'composition' | 'recording' | 'both'
  status: 'verified' | 'pending' | 'disputed'
  created_at: string
  updated_at: string
}

export interface Report {
  id: string
  report_type: 'revenue' | 'claims' | 'matches' | 'compliance'
  period_start: string
  period_end: string
  data_json: Record<string, any>
  generated_by: string
  created_at: string
  updated_at: string
}

export interface Revenue {
  id: string
  asset_id: string
  source: string
  amount: number
  currency: string
  period_date: string
  status: 'pending' | 'received' | 'reconciled'
  created_at: string
  updated_at: string
}

export interface Analytics {
  id: string
  asset_id: string
  metric_type: 'views' | 'streams' | 'downloads' | 'shares'
  value: number
  period_date: string
  source: string
  created_at: string
  updated_at: string
}

export interface UserPermission {
  id: string
  user_id: string
  permission_type: string
  resource_type: string
  access_level: 'view' | 'edit' | 'admin'
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface DashboardStats {
  total_assets: number
  total_claims: number
  total_matches: number
  total_revenue: number
  pending_actions: number
}
