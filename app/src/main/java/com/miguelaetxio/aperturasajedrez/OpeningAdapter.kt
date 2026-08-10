package com.miguelaetxio.aperturasajedrez

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.miguelaetxio.aperturasajedrez.data.OpeningEntry

class OpeningAdapter(
    private val entries: List<OpeningEntry>,
    private val onClick: (OpeningEntry) -> Unit
) : RecyclerView.Adapter<OpeningAdapter.ViewHolder>() {

    class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val title: TextView = view.findViewById(R.id.openingTitle)
        val subtitle: TextView = view.findViewById(R.id.openingSubtitle)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.item_opening, parent, false)
        return ViewHolder(view)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val entry = entries[position]
        holder.title.text = entry.title
        holder.subtitle.text = entry.subtitle
        holder.itemView.setOnClickListener { onClick(entry) }
    }

    override fun getItemCount(): Int = entries.size
}
