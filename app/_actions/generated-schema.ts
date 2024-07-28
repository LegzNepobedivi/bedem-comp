export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Agent: {
        Row: {
          description: string | null
          id: number
          language_id: number | null
          last_user: string | null
          license: string | null
          mail: string | null
          name: string | null
          position: string | null
          telephone: string | null
          updated_at: string | null
        }
        Insert: {
          description?: string | null
          id?: number
          language_id?: number | null
          last_user?: string | null
          license?: string | null
          mail?: string | null
          name?: string | null
          position?: string | null
          telephone?: string | null
          updated_at?: string | null
        }
        Update: {
          description?: string | null
          id?: number
          language_id?: number | null
          last_user?: string | null
          license?: string | null
          mail?: string | null
          name?: string | null
          position?: string | null
          telephone?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Agent_language_id_fkey"
            columns: ["language_id"]
            isOneToOne: false
            referencedRelation: "Language"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Agent_last_user_fkey"
            columns: ["last_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      Apartment: {
        Row: {
          apartment_type: Database["public"]["Enums"]["ApartmentType"] | null
          balcony: boolean | null
          description: string | null
          floor: string | null
          heating: string | null
          id: number
          language_id: number | null
          last_user_id: string | null
          lift: boolean | null
          linkVR: string | null
          linkYT: string | null
          location: string | null
          new_fresh: boolean | null
          number_of_rooms: string | null
          price: number | null
          size: string | null
          sold: boolean
          sort_num: number | null
          title: string
          transaction_type:
            | Database["public"]["Enums"]["TransactionType"]
            | null
          updated_at: string | null
        }
        Insert: {
          apartment_type?: Database["public"]["Enums"]["ApartmentType"] | null
          balcony?: boolean | null
          description?: string | null
          floor?: string | null
          heating?: string | null
          id?: never
          language_id?: number | null
          last_user_id?: string | null
          lift?: boolean | null
          linkVR?: string | null
          linkYT?: string | null
          location?: string | null
          new_fresh?: boolean | null
          number_of_rooms?: string | null
          price?: number | null
          size?: string | null
          sold?: boolean
          sort_num?: number | null
          title: string
          transaction_type?:
            | Database["public"]["Enums"]["TransactionType"]
            | null
          updated_at?: string | null
        }
        Update: {
          apartment_type?: Database["public"]["Enums"]["ApartmentType"] | null
          balcony?: boolean | null
          description?: string | null
          floor?: string | null
          heating?: string | null
          id?: never
          language_id?: number | null
          last_user_id?: string | null
          lift?: boolean | null
          linkVR?: string | null
          linkYT?: string | null
          location?: string | null
          new_fresh?: boolean | null
          number_of_rooms?: string | null
          price?: number | null
          size?: string | null
          sold?: boolean
          sort_num?: number | null
          title?: string
          transaction_type?:
            | Database["public"]["Enums"]["TransactionType"]
            | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Apartment_language_id_fkey"
            columns: ["language_id"]
            isOneToOne: false
            referencedRelation: "Language"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Apartment_last_user_fkey"
            columns: ["last_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      Component: {
        Row: {
          component_type: Database["public"]["Enums"]["ComponentType"] | null
          id: number
          language_id: number | null
          last_user_id: string | null
          sort_num: number | null
          subtype_id: number | null
          title: string | null
          updated_at: string
        }
        Insert: {
          component_type?: Database["public"]["Enums"]["ComponentType"] | null
          id?: number
          language_id?: number | null
          last_user_id?: string | null
          sort_num?: number | null
          subtype_id?: number | null
          title?: string | null
          updated_at?: string
        }
        Update: {
          component_type?: Database["public"]["Enums"]["ComponentType"] | null
          id?: number
          language_id?: number | null
          last_user_id?: string | null
          sort_num?: number | null
          subtype_id?: number | null
          title?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "Component_language_id_fkey"
            columns: ["language_id"]
            isOneToOne: false
            referencedRelation: "Language"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Component_last_user_id_fkey"
            columns: ["last_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      Exclusive: {
        Row: {
          id: number
          language_id: number | null
          last_user_id: string | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          language_id?: number | null
          last_user_id?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          language_id?: number | null
          last_user_id?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Exclusive_language_id_fkey"
            columns: ["language_id"]
            isOneToOne: false
            referencedRelation: "Language"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Exclusive_last_user_id_fkey"
            columns: ["last_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      hasApartments: {
        Row: {
          apartment_id: number
          object_id: number
        }
        Insert: {
          apartment_id: number
          object_id: number
        }
        Update: {
          apartment_id?: number
          object_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "hasApartments_apartment_id_fkey"
            columns: ["apartment_id"]
            isOneToOne: false
            referencedRelation: "Apartment"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hasApartments_object_id_fkey"
            columns: ["object_id"]
            isOneToOne: false
            referencedRelation: "ObjectUnit"
            referencedColumns: ["id"]
          },
        ]
      }
      isAgent: {
        Row: {
          agent_id: number
          stan_id: number
        }
        Insert: {
          agent_id: number
          stan_id: number
        }
        Update: {
          agent_id?: number
          stan_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "isAgent_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "Agent"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "isAgent_stan_id_fkey"
            columns: ["stan_id"]
            isOneToOne: false
            referencedRelation: "Apartment"
            referencedColumns: ["id"]
          },
        ]
      }
      isOfApartment: {
        Row: {
          apartment_id: number
          picture_id: number
        }
        Insert: {
          apartment_id: number
          picture_id: number
        }
        Update: {
          apartment_id?: number
          picture_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "isOfApartment_apartment_id_fkey"
            columns: ["apartment_id"]
            isOneToOne: false
            referencedRelation: "Apartment"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "isOfApartment_picture_id_fkey"
            columns: ["picture_id"]
            isOneToOne: false
            referencedRelation: "Picture"
            referencedColumns: ["id"]
          },
        ]
      }
      isOfComponent: {
        Row: {
          component_id: number
          picture_id: number
        }
        Insert: {
          component_id?: number
          picture_id: number
        }
        Update: {
          component_id?: number
          picture_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "isOfComponent_component_id_fkey"
            columns: ["component_id"]
            isOneToOne: false
            referencedRelation: "Component"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "isOfComponent_picture_id_fkey"
            columns: ["picture_id"]
            isOneToOne: false
            referencedRelation: "Picture"
            referencedColumns: ["id"]
          },
        ]
      }
      isOfExclusive: {
        Row: {
          exclusive_id: number
          project_id: number
        }
        Insert: {
          exclusive_id: number
          project_id: number
        }
        Update: {
          exclusive_id?: number
          project_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "isOfExclusive_exclusive_id_fkey"
            columns: ["exclusive_id"]
            isOneToOne: false
            referencedRelation: "Exclusive"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "isOfExclusive_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "Project"
            referencedColumns: ["id"]
          },
        ]
      }
      isOfProject: {
        Row: {
          component_id: number
          project_id: number
        }
        Insert: {
          component_id: number
          project_id: number
        }
        Update: {
          component_id?: number
          project_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "isOfProject_component_id_fkey"
            columns: ["component_id"]
            isOneToOne: false
            referencedRelation: "Component"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "isOfProject_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "Project"
            referencedColumns: ["id"]
          },
        ]
      }
      Language: {
        Row: {
          id: number
          name: string | null
          updated_at: string
        }
        Insert: {
          id?: number
          name?: string | null
          updated_at?: string
        }
        Update: {
          id?: number
          name?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      ObjectUnit: {
        Row: {
          component_id: number | null
          description: string | null
          id: number
          name: string
          sort_num: number
          updated_at: string | null
        }
        Insert: {
          component_id?: number | null
          description?: string | null
          id?: never
          name: string
          sort_num?: number
          updated_at?: string | null
        }
        Update: {
          component_id?: number | null
          description?: string | null
          id?: never
          name?: string
          sort_num?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ObjectUnit_component_id_fkey"
            columns: ["component_id"]
            isOneToOne: false
            referencedRelation: "Component"
            referencedColumns: ["id"]
          },
        ]
      }
      Picture: {
        Row: {
          id: number
          last_user_id: string | null
          sort_num: number
          updated_at: string | null
          url: string | null
        }
        Insert: {
          id?: never
          last_user_id?: string | null
          sort_num: number
          updated_at?: string | null
          url?: string | null
        }
        Update: {
          id?: never
          last_user_id?: string | null
          sort_num?: number
          updated_at?: string | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Pictures_last_user_id_fkey"
            columns: ["last_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      Project: {
        Row: {
          description: string | null
          id: number
          name: string
          sort_num: number
        }
        Insert: {
          description?: string | null
          id?: never
          name: string
          sort_num: number
        }
        Update: {
          description?: string | null
          id?: never
          name?: string
          sort_num?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      connect_agent_to_apartment: {
        Args: {
          n_agent_id: number
          n_apartment_id: number
        }
        Returns: boolean
      }
      connect_apartment_to_object_unit: {
        Args: {
          n_apartment_id: number
          n_object_id: number
        }
        Returns: boolean
      }
      connect_picture_to_apartment: {
        Args: {
          n_picture_id: number
          n_apartment_id: number
        }
        Returns: boolean
      }
      connect_picture_to_component: {
        Args: {
          n_picture_id: number
          n_component_id: number
        }
        Returns: boolean
      }
      create_agent: {
        Args: {
          n_name: string
          n_mail: string
          n_position: string
          n_license: string
          n_description: string
          n_telephone: string
          n_language_id: number
        }
        Returns: number
      }
      create_apartment: {
        Args: {
          n_title: string
          n_description: string
          n_price: number
          n_number_of_rooms: string
          n_size: string
          n_floor: string
          n_sort_num: number
          n_location: string
          n_heating: string
          n_balcony: boolean
          n_lift: boolean
          n_new_fresh: boolean
          n_sold: boolean
          n_apartment_type: Database["public"]["Enums"]["ApartmentType"]
          n_transaction_type: Database["public"]["Enums"]["TransactionType"]
          n_link_yt: string
          n_link_vr: string
          n_agent_id: number
          n_language_id: number
          n_last_user_id: number
        }
        Returns: number
      }
      create_apartment_and_connect_to_agent: {
        Args: {
          n_title: string
          n_description: string
          n_price: number
          n_number_of_rooms: string
          n_size: string
          n_floor: string
          n_sort_num: number
          n_location: string
          n_heating: string
          n_balcony: boolean
          n_lift: boolean
          n_new_fresh: boolean
          n_sold: boolean
          n_apartment_type: Database["public"]["Enums"]["ApartmentType"]
          n_transaction_type: Database["public"]["Enums"]["TransactionType"]
          n_link_yt: string
          n_link_vr: string
          n_agent_id: number
          n_language_id: number
          n_last_user_id: number
        }
        Returns: boolean
      }
      create_object_unit: {
        Args: {
          n_name: string
          n_description: string
          n_sort_num: string
        }
        Returns: number
      }
      create_picture: {
        Args: {
          n_url: string
          n_sort_num: string
        }
        Returns: number
      }
      create_picture_and_connect_to_apartment: {
        Args: {
          n_url: string
          n_sort_num: string
          n_apartment_id: number
        }
        Returns: number
      }
      create_picture_and_connect_to_component: {
        Args: {
          n_url: string
          n_sort_num: string
          n_component_id: number
        }
        Returns: number
      }
      create_project: {
        Args: {
          n_name: string
          n_description: string
          n_sort_num: string
        }
        Returns: number
      }
      delete_agent: {
        Args: {
          n_id: number
        }
        Returns: boolean
      }
      delete_project: {
        Args: {
          n_id: number
        }
        Returns: boolean
      }
      disconnect_agent: {
        Args: {
          n_agent_id: number
          n_apartment_id: number
        }
        Returns: boolean
      }
      get_agent_by_apartment_id: {
        Args: {
          n_apartment_id: number
        }
        Returns: {
          description: string | null
          id: number
          language_id: number | null
          last_user: string | null
          license: string | null
          mail: string | null
          name: string | null
          position: string | null
          telephone: string | null
          updated_at: string | null
        }[]
      }
      get_all_agents: {
        Args: Record<PropertyKey, never>
        Returns: {
          description: string | null
          id: number
          language_id: number | null
          last_user: string | null
          license: string | null
          mail: string | null
          name: string | null
          position: string | null
          telephone: string | null
          updated_at: string | null
        }[]
      }
      get_all_apartments: {
        Args: Record<PropertyKey, never>
        Returns: {
          apartment_type: Database["public"]["Enums"]["ApartmentType"] | null
          balcony: boolean | null
          description: string | null
          floor: string | null
          heating: string | null
          id: number
          language_id: number | null
          last_user_id: string | null
          lift: boolean | null
          linkVR: string | null
          linkYT: string | null
          location: string | null
          new_fresh: boolean | null
          number_of_rooms: string | null
          price: number | null
          size: string | null
          sold: boolean
          sort_num: number | null
          title: string
          transaction_type:
            | Database["public"]["Enums"]["TransactionType"]
            | null
          updated_at: string | null
        }[]
      }
      get_all_objects: {
        Args: Record<PropertyKey, never>
        Returns: {
          component_id: number | null
          description: string | null
          id: number
          name: string
          sort_num: number
          updated_at: string | null
        }[]
      }
      get_all_objects_by_component_id: {
        Args: {
          n_component_id: number
        }
        Returns: {
          component_id: number | null
          description: string | null
          id: number
          name: string
          sort_num: number
          updated_at: string | null
        }[]
      }
      get_all_projects: {
        Args: Record<PropertyKey, never>
        Returns: {
          description: string | null
          id: number
          name: string
          sort_num: number
        }[]
      }
      get_apartment_by_id: {
        Args: {
          n_apartment_id: number
        }
        Returns: {
          apartment_type: Database["public"]["Enums"]["ApartmentType"] | null
          balcony: boolean | null
          description: string | null
          floor: string | null
          heating: string | null
          id: number
          language_id: number | null
          last_user_id: string | null
          lift: boolean | null
          linkVR: string | null
          linkYT: string | null
          location: string | null
          new_fresh: boolean | null
          number_of_rooms: string | null
          price: number | null
          size: string | null
          sold: boolean
          sort_num: number | null
          title: string
          transaction_type:
            | Database["public"]["Enums"]["TransactionType"]
            | null
          updated_at: string | null
        }[]
      }
      get_object_by_id: {
        Args: {
          n_object_id: number
        }
        Returns: {
          component_id: number | null
          description: string | null
          id: number
          name: string
          sort_num: number
          updated_at: string | null
        }[]
      }
      get_pictures_by_apartment_id: {
        Args: {
          n_apartment_id: number
        }
        Returns: {
          id: number
          last_user_id: string | null
          sort_num: number
          updated_at: string | null
          url: string | null
        }[]
      }
      get_pictures_by_component_id: {
        Args: {
          n_component_id: number
        }
        Returns: {
          id: number
          last_user_id: string | null
          sort_num: number
          updated_at: string | null
          url: string | null
        }[]
      }
      get_project_by_id: {
        Args: {
          n_project_id: number
        }
        Returns: {
          description: string | null
          id: number
          name: string
          sort_num: number
        }[]
      }
      get_thumbnail_by_apartment_id: {
        Args: {
          n_apartment_id: number
        }
        Returns: {
          id: number
          last_user_id: string | null
          sort_num: number
          updated_at: string | null
          url: string | null
        }[]
      }
      search_get_all_apartments: {
        Args: {
          input_transaction_type: Database["public"]["Enums"]["TransactionType"]
          input_apartment_type: Database["public"]["Enums"]["ApartmentType"]
          input_title: string
        }
        Returns: {
          apartment_type: Database["public"]["Enums"]["ApartmentType"] | null
          balcony: boolean | null
          description: string | null
          floor: string | null
          heating: string | null
          id: number
          language_id: number | null
          last_user_id: string | null
          lift: boolean | null
          linkVR: string | null
          linkYT: string | null
          location: string | null
          new_fresh: boolean | null
          number_of_rooms: string | null
          price: number | null
          size: string | null
          sold: boolean
          sort_num: number | null
          title: string
          transaction_type:
            | Database["public"]["Enums"]["TransactionType"]
            | null
          updated_at: string | null
        }[]
      }
      update_agent: {
        Args: {
          n_agent_id: number
          n_name: string
          n_mail: string
          n_position: string
          n_license: string
          n_description: string
          n_telephone: string
          n_language_id: number
        }
        Returns: boolean
      }
      update_apartment: {
        Args: {
          n_title: string
          n_description: string
          n_price: number
          n_number_of_rooms: string
          n_size: string
          n_floor: string
          n_sort_num: number
          n_location: string
          n_heating: string
          n_balcony: boolean
          n_lift: boolean
          n_new_fresh: boolean
          n_sold: boolean
          n_apartment_type: Database["public"]["Enums"]["ApartmentType"]
          n_transaction_type: Database["public"]["Enums"]["TransactionType"]
          n_link_yt: string
          n_link_vr: string
          n_agent_id: number
          n_language_id: number
          n_last_user_id: number
        }
        Returns: number
      }
      update_object_unit: {
        Args: {
          n_object_id: number
          n_name: string
          n_description: string
          n_sort_num: number
        }
        Returns: boolean
      }
      update_picture: {
        Args: {
          n_picture_id: number
          n_url: string
          n_sort_num: number
        }
        Returns: boolean
      }
      update_project: {
        Args: {
          n_project_id: number
          n_name: string
          n_description: string
          n_sort_num: number
        }
        Returns: boolean
      }
    }
    Enums: {
      ApartmentType: "flat" | "house" | "businessSpace" | "field" | "apartment"
      ComponentType: "ObjectUnit"
      TipStana: "stan" | "kuca" | "poslProstor" | "zemljiste"
      TipTransakcije: "prodajem" | "izdajem"
      TransactionType: "selling" | "renting"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
